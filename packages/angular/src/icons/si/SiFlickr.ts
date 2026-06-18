import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-flickr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFlickr {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.33 6.67C2.39 6.67 0 9.06 0 12c0 2.95 2.39 5.33 5.33 5.33 2.95 0 5.33-2.39 5.33-5.33 0-2.94-2.39-5.33-5.33-5.33zm13.33 0c-2.95 0-5.33 2.39-5.33 5.33 0 2.95 2.39 5.33 5.33 5.33C21.61 17.33 24 14.95 24 12c0-2.94-2.39-5.33-5.33-5.33Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFlickr;
