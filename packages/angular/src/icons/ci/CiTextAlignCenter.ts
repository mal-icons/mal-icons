import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-text-align-center",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiTextAlignCenter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Text Align Center"}],["path",{"d":"M20.44,4.06H3.56a0.50.5,0,1,1,0-1H20.44a0.50.5,0,1,1,0,1Z"}],["path",{"d":"M16.5,8.5h-9a0.50.5,0,0,1,0-1h9a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M16.5,16.5h-9a0.50.5,0,1,1,0-1h9a0.50.5,0,1,1,0,1Z"}],["path",{"d":"M20.44,12.5H3.56a0.50.5,0,0,1,0-1H20.44a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M20.44,20.94H3.56a0.50.5,0,1,1,0-1H20.44a0.50.5,0,0,1,0,1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiTextAlignCenter;
