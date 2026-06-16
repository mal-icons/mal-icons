import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-view-carousel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrViewCarousel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 7h2c0.55 0 1 0.45 1 1v8c0 0.55-0.45 1-1 1H3c-0.55 0-1-0.45-1-1V8c0-0.550.45-1 1-1zm5 12h8c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1H8c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1zM19 7h2c0.55 0 1 0.45 1 1v8c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1V8c0-0.550.45-1 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrViewCarousel;
