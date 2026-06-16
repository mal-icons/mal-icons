import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-thunderstorm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrThunderstorm {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m572-110-45-23q-12.92-6.7-15.96-20.85Q508-168 518-179l78-91q4.5-5 10.13-7.5T618.5-280q19.5 0 27.5 17.5t-5 31.5l-53 61 45 23q12.92 6.7 15.96 20.85Q652-112 642-101l-78 91q-4.5 5-10.12 7.5T541.5 0Q522 0 514-17.5t5-31.5l53-61Zm-240 0-45-23q-12.92-6.7-15.96-20.85Q268-168 278-179l78-91q4.5-5 10.13-7.5T378.5-280q19.5 0 27.5 17.5t-5 31.5l-53 61 45 23q12.92 6.7 15.96 20.85Q412-112 402-101l-78 91q-4.5 5-10.12 7.5T301.5 0Q282 0 274-17.5t5-31.5l53-61Zm-42-230q-86.86 0-148.43-61.52Q80-463.04 80-549.83 80-629 136.5-691 193-753 277-759q32-56 84.5-88.5T480.42-880Q571-880 632.5-822.5T708-680q79 4 125.5 53.5T880-510.38Q880-440 830.42-390 780.83-340 710-340H290Zm0-60h420q46.2 0 78.1-32.5 31.9-32.5 31.9-78T788.1-588q-31.9-32-78.1-32h-60v-30q0-71-49.5-120.5T480.21-820q-51.48 0-93.85 27.5Q344-765 324-718l-8 18h-28q-62 2-105 45.39t-43 104.46Q140-488 183.93-444 227.86-400 290-400Zm190-210Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrThunderstorm;
