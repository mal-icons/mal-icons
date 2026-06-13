import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-git-network-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoGitNetworkSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M384,32a64,64,0,0,0-57.67,91.73L255.5,204.55l-70.19-80.1A64,64,0,1,0,128,160c1.1,0,2.2,0,3.29-0.08L224,265.7v94.91a64,64,0,1,0,64,0V264.56l91.78-104.71c1.390.09,2.80.15,4.220.15a64,64,0,0,0,0-128ZM96,96a32,32,0,1,1,32,32A32,32,0,0,1,96,96ZM256,448a32,32,0,1,1,32-32A32,32,0,0,1,256,448ZM384,128a32,32,0,1,1,32-32A32,32,0,0,1,384,128Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoGitNetworkSharp;
