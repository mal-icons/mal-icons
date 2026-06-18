import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-hashtag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiHashtag {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.78 14L8.2 10H4V8H8.41L8.94 3H10.95L10.43 8H14.41L14.94 3H16.95L16.43 8H20V10H16.22L15.8 14H20V16H15.59L15.06 21H13.05L13.57 16H9.59L9.06 21H7.05L7.57 16H4V14H7.78ZM9.8 14H13.78L14.2 10H10.22L9.8 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiHashtag;
