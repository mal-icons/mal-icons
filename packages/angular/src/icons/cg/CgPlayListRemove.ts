import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-play-list-remove",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgPlayListRemove {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.96 4.63H3.96V6.63H15.96V4.63Z","fill":"currentColor"}],["path",{"d":"M15.96 8.63H3.96V10.63H15.96V8.63Z","fill":"currentColor"}],["path",{"d":"M3.96 12.63H11.96V14.63H3.96V12.63Z","fill":"currentColor"}],["path",{"d":"M12.96 13.71L14.38 12.3L16.5 14.42L18.62 12.3L20.04 13.71L17.91 15.83L20.04 17.95L18.62 19.37L16.5 17.24L14.38 19.37L12.96 17.95L15.09 15.83L12.96 13.71Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgPlayListRemove;
