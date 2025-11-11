import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface DonateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonateDialog = ({ open, onOpenChange }: DonateDialogProps) => {
  const donationAmounts = [25, 50, 100, 250, 500];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Heart className="text-primary" />
            Make a Difference Today
          </DialogTitle>
          <DialogDescription className="text-base">
            Your donation helps us continue our mission to support communities in Tanzania. Every contribution counts!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div>
            <p className="text-sm font-medium mb-3">Choose an amount:</p>
            <div className="grid grid-cols-3 gap-2">
              {donationAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  ${amount}
                </Button>
              ))}
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                Custom
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
              Continue to Payment
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Secure payment processing. Your donation is tax-deductible.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm font-semibold mb-2">Your Impact:</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• $25 provides clean water for a family</li>
              <li>• $50 supports a child's education for a month</li>
              <li>• $100 helps establish a community garden</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonateDialog;
