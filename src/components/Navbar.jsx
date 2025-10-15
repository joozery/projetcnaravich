import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, LayoutDashboard, Settings, LogIn, LogOut, UserPlus, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import logo from '@/assets/logohead.jpg';

const Navbar = ({ currentPage, setCurrentPage, user, onLogout }) => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [debtDialogOpen, setDebtDialogOpen] = useState(false);
  const [debtForm, setDebtForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    details: ''
  });
  const { toast } = useToast();
  
  // Animation variants
  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const buttonVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.98 }
  };

  const userInfoVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.2 }
    }
  };

  const handleDebtFormChange = (e) => {
    setDebtForm({
      ...debtForm,
      [e.target.name]: e.target.value
    });
  };

  const handleDebtFormSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!debtForm.name || !debtForm.phone || !debtForm.email || !debtForm.subject || !debtForm.details) {
      toast({
        title: "กรุณากรอกข้อมูลให้ครบถ้วน",
        description: "โปรดกรอกข้อมูลทุกช่องให้ครบถ้วน",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(debtForm.email)) {
      toast({
        title: "อีเมลไม่ถูกต้อง",
        description: "กรุณากรอกอีเมลให้ถูกต้อง",
        variant: "destructive",
      });
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{9,10}$/;
    if (!phoneRegex.test(debtForm.phone.replace(/-/g, ''))) {
      toast({
        title: "เบอร์โทรศัพท์ไม่ถูกต้อง",
        description: "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง",
        variant: "destructive",
      });
      return;
    }

    // Success
    console.log('Debt Form Submitted:', debtForm);
    
    toast({
      title: "ส่งข้อมูลสำเร็จ",
      description: "เราได้รับข้อมูลการฝากหนี้ของคุณแล้ว ทีมงานจะติดต่อกลับโดยเร็ว",
    });

    // Reset form
    setDebtForm({
      name: '',
      phone: '',
      email: '',
      subject: '',
      details: ''
    });
    
    setDebtDialogOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.6
      }}
      className="glass-effect sticky top-0 z-50 border-b border-primary/20"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div 
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentPage('/')}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: logoLoaded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={logo}
                alt="ตลาดหนี้มือถือ"
                className="h-10 md:h-12 w-auto max-w-[180px] object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onLoad={() => setLogoLoaded(true)}
                onError={() => {
                  console.error('Failed to load logo');
                  setLogoLoaded(true);
                }}
              />
              {!logoLoaded && (
                <div className="h-10 md:h-12 w-32 bg-gray-200 animate-pulse rounded"></div>
              )}
            </motion.div>
          </motion.div>

          <div className="flex items-center gap-2">
            {/* ปุ่มฝากหนี้ - แสดงทั้งล็อกอินและไม่ล็อกอิน */}
            <Dialog open={debtDialogOpen} onOpenChange={setDebtDialogOpen}>
              <DialogTrigger asChild>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <FileText className="w-4 h-4 mr-2" />
                    ฝากหนี้
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">ฝากหนี้</DialogTitle>
                  <DialogDescription>
                    กรอกข้อมูลด้านล่างเพื่อฝากหนี้กับเรา ทีมงานจะติดต่อกลับโดยเร็ว
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleDebtFormSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">ชื่อ *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="กรอกชื่อของคุณ"
                      value={debtForm.name}
                      onChange={handleDebtFormChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">เบอร์โทรศัพท์ *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="กรอกเบอร์โทรศัพท์"
                      value={debtForm.phone}
                      onChange={handleDebtFormChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">อีเมล *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="กรอกอีเมล"
                      value={debtForm.email}
                      onChange={handleDebtFormChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">หัวข้อ *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="กรอกหัวข้อ"
                      value={debtForm.subject}
                      onChange={handleDebtFormChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="details">รายละเอียด *</Label>
                    <textarea
                      id="details"
                      name="details"
                      placeholder="กรอกรายละเอียดเพิ่มเติม"
                      value={debtForm.details}
                      onChange={handleDebtFormChange}
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    />
                  </div>
                  
                  <DialogFooter>
                    <Button type="submit" className="w-full">
                      ส่งข้อมูล
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <AnimatePresence mode="wait">
              {!user ? (
                <motion.div
                  key="auth-buttons"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button 
                      variant="ghost" 
                      onClick={() => setCurrentPage('/login')}
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      เข้าสู่ระบบ
                    </Button>
                  </motion.div>
                         <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                           <Button
                             onClick={() => setCurrentPage('/register')}
                           >
                             <UserPlus className="w-4 h-4 mr-2" />
                             สมัครสมาชิก
                           </Button>
                         </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="user-menu"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button 
                      variant="ghost" 
                      onClick={() => setCurrentPage('/')}
                      className={`${currentPage === '/' ? 'bg-accent' : ''}`}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      ตลาดหนี้
                    </Button>
                  </motion.div>
                  
                  {user.role !== 'admin' && (
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button 
                        variant="ghost" 
                        onClick={() => setCurrentPage('/dashboard')}
                        className={`${currentPage === '/dashboard' ? 'bg-accent' : ''}`}
                      >
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Dashboard
                      </Button>
                    </motion.div>
                  )}
                  
                         {user.role === 'admin' && (
                           <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                             <Button
                               variant="ghost"
                               onClick={() => setCurrentPage('/admin-dashboard')}
                               className={`${currentPage === '/admin-dashboard' ? 'bg-accent' : ''}`}
                             >
                               <Settings className="w-4 h-4 mr-2" />
                               จัดการระบบ
                             </Button>
                           </motion.div>
                         )}
                  
                  <motion.div 
                    className="flex items-center gap-3 pl-2 border-l"
                    variants={userInfoVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="text-right">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.role === 'admin' ? 'ผู้ดูแลระบบ' : user.memberType === 'investor' ? 'นักลงทุน' : 'นักทวง'}
                      </p>
                    </div>
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={onLogout}
                        whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                      >
                        <LogOut className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;