import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-receipt-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoReceiptSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M448,48,416,32,384,48,352,32,320,48,288,32,256,48,224,32,192,48,144,32V288s0,0.05,0,0.05H368V424c0,30.93,33.07,56,64,56h12c30.93,0,52-25.07,52-56V32ZM272.5,240l-0.5-32H431.5l0.5,32Zm-64-80-0.5-32H431.5l0.5,32Z"}],["path",{"d":"M336,424V320H16v32c0,50.55,5.78,71.62,14.46,87.63C45.19,466.8,71.86,480,112,480H368S336,460,336,424Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoReceiptSharp;
