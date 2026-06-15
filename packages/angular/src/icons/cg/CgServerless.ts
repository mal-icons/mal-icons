import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-serverless",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgServerless {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.79 6H5V9H10.7L11.79 6Z","fill":"currentColor"}],["path",{"d":"M9.97 11H5V14H8.88L9.97 11Z","fill":"currentColor"}],["path",{"d":"M11 14L12.1 11H20V14H11Z","fill":"currentColor"}],["path",{"d":"M8.15 16H5V19H7.06L8.15 16Z","fill":"currentColor"}],["path",{"d":"M9.18 19L10.28 16H20V19H9.18Z","fill":"currentColor"}],["path",{"d":"M12.82 9L13.92 6H20V9H12.82Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgServerless;
