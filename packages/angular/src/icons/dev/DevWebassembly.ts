import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-webassembly",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevWebassembly {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-webassembly-1-a)"}],["path",{"fill":"currentColor","d":"M368.6 0H600v600H0V0h231.4l-0.2 3.2a68.8 68.8 0 1 0 137.6 0zm136.8 535.8h41.2l-62.5-212.4h-62.7L370 535.8h40l10.4-47.3h71.4zm-219 0H326l50.7-212.4h-39l-31 146.3h-0.5l-29.5-146.3h-37.2L206.6 468h-0.5L179 323.4h-39.7L185 535.8h40.2l31.5-144.6h0.5zm159-160H462l20 77.9h-54z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevWebassembly;
