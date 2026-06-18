import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-flickr-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFlickrLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 17C8.76 17 11 14.76 11 12 11 9.24 8.76 7 6 7 3.24 7 1 9.24 1 12 1 14.76 3.24 17 6 17ZM9 12C9 13.66 7.66 15 6 15 4.34 15 3 13.66 3 12 3 10.34 4.34 9 6 9 7.66 9 9 10.34 9 12ZM18 17C20.76 17 23 14.76 23 12 23 9.24 20.76 7 18 7 15.24 7 13 9.24 13 12 13 14.76 15.24 17 18 17ZM21 12C21 13.66 19.66 15 18 15 16.34 15 15 13.66 15 12 15 10.34 16.34 9 18 9 19.66 9 21 10.34 21 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFlickrLine;
