import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-universal-currency-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrUniversalCurrencyAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-200q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 24-18 42t-42 18H140Zm0-60h680v-440H140v440Zm580-100h-85q-10.83 0-17.92 7.12-7.08 7.12-7.08 18Q610-324 617.08-317q7.08 7 17.92 7h105q12.75 0 21.38-8.62T770-340v-105q0-10.83-7.12-17.92-7.12-7.08-18-7.08Q734-470 727-462.92q-7 7.08-7 17.92v85Zm-239.94-5Q528-365 561.5-398.56t33.5-81.5Q595-528 561.44-561.5t-81.5-33.5Q432-595 398.5-561.44t-33.5 81.5Q365-432 398.56-398.5t81.5 33.5ZM240-595h85q10.83 0 17.92-7.12 7.08-7.12 7.08-18Q350-631 342.92-638q-7.08-7-17.92-7H220q-12.75 0-21.37 8.63T190-615v105q0 10.83 7.12 17.92 7.12 7.08 18 7.08Q226-485 233-492.08q7-7.08 7-17.92v-85ZM140-260v-440 440Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrUniversalCurrencyAlt;
