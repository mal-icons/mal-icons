import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-summits",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSummits {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M96.07 20c-26.51 0-48 21.49-48 48 0 26.5 21.49 48 48 48 26.53 0 48.03-21.5 48.03-48 0-26.51-21.5-48-48.03-48zM326.2 81.5L217.1 237.9l-6.5 69.2-86.1-108.7-68.48 111.4-10.63 56.1-29.26 67.7 1.130.5L64.07 492l96.03-21.3 25.3-25.4-69.5-93.5 45.4-24.8-34.5-96.5 136.3 180.2 9-14.7-19.1-86 66.8-28.60.3-156.4 51.7 178.7-44.6 62.8-9 39.4-50.8 54.8L403 426.6l-37.1-21.2 34.5-31.8-27.8-23.3 52.8-72.3 6.1 90.6 52 49.9 12.4-13-47-45.1-7.5-112.8-57.3 33.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSummits;
