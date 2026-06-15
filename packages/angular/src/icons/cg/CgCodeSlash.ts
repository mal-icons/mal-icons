import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-code-slash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgCodeSlash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.33 3.05L8.67 20.43L10.6 20.95L15.26 3.57L13.33 3.05Z","fill":"currentColor"}],["path",{"d":"M7.61 18.36L8.97 16.91L8.97 16.89L3.88 12.11L8.67 7.01L7.21 5.64L1.05 12.2L7.61 18.36Z","fill":"currentColor"}],["path",{"d":"M16.39 18.36L15.03 16.91L15.03 16.89L20.12 12.11L15.33 7.01L16.79 5.64L22.95 12.2L16.39 18.36Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgCodeSlash;
