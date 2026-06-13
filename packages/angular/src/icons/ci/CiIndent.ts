import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-indent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiIndent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.44,4.06H3.56a0.50.5,0,0,1,0-1H20.44a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M20.44,9.69h-9a0.50.5,0,0,1,0-1h9a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M20.44,15.31h-9a0.50.5,0,0,1,0-1h9a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M20.44,20.94H3.56a0.50.5,0,1,1,0-1H20.44a0.50.5,0,1,1,0,1Z"}],["path",{"d":"M7.91,11.65a0.490.49,0,0,1,0,0.7l-2,2a0.50.5,0,0,1-0.7-0.7L6.36,12.5H3.54a0.50.5,0,0,1,0-1H6.35c-0.38-0.38-0.76-0.76-1.14-1.15a0.50.5,0,0,1,0.7-0.7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiIndent;
