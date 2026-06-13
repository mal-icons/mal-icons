import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-shirt-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoShirtSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M256,42c-33.88,0-64-10-64-10l0,2A64,64,0,0,0,320,34l0-2S289.88,42,256,42Z"}],["path",{"d":"M352,44c-5.49,47.76-46.79,85-96,85s-90.51-37.24-96-85L16,94,34,208l61.71,7.42c7.080.9,7.10.9,7.1,8.19L96,480H416l-6.81-256.39c-0.21-7-0.21-7,7.1-8.19L478,208,496,94Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoShirtSharp;
