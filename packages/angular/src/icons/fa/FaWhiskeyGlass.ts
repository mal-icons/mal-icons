import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-whiskey-glass",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaWhiskeyGlass {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4 0.3 68.6l50 342.9c5.7 39.3 39.4 68.5 79.2 68.5l253 0c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32L32 32zM87.7 224L69 96l374 0L424.3 224 87.7 224z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaWhiskeyGlass;
