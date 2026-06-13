import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-git-compare",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoGitCompare {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M218.31,340.69A16,16,0,0,0,191,352v32H171a28,28,0,0,1-28-28V152a64,64,0,1,0-64-1.16V356a92.1,92.1,0,0,0,92,92h20v32a16,16,0,0,0,27.31,11.31l64-64a16,16,0,0,0,0-22.62ZM112,64A32,32,0,1,1,80,96,32,32,0,0,1,112,64Z"}],["path",{"d":"M432,360.61V156a92.1,92.1,0,0,0-92-92H320V32a16,16,0,0,0-27.31-11.31l-64,64a16,16,0,0,0,0,22.62l64,64A16,16,0,0,0,320,160V128h20a28,28,0,0,1,28,28V360.61a64,64,0,1,0,64,0ZM400,448a32,32,0,1,1,32-32A32,32,0,0,1,400,448Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoGitCompare;
