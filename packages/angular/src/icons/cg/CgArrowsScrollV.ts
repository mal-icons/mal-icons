import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrows-scroll-v",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowsScrollV {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.41 10.11L13.42 10.11L12 11.53L12 11.52L12 11.53L10.58 10.11L10.59 10.11L7.76 7.28L9.18 5.87L12 8.69L14.82 5.87L16.24 7.28L13.41 10.11Z","fill":"currentColor"}],["path",{"d":"M12 15.31L14.82 18.13L16.24 16.72L13.41 13.89L13.42 13.89L12 12.47L12 12.48L12 12.47L10.58 13.89L10.59 13.89L7.76 16.72L9.18 18.13L12 15.31Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowsScrollV;
