import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-elm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiElm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.99 12.81V23.2l-5.2-5.2zM6.8 6.01H17.19l-5.2 5.2zm9.28-1.12H5.68L0.80.02h10.39zm7.12 7.12L17.99 6.81l-5.2 5.2 5.2 5.2zm0.81-0.81L12.81 0H24zM0 23.2V0.81l11.19 11.19zm23.190.8H0.8l11.19-11.19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiElm;
