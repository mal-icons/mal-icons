import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-floydhub",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevFloydhub {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-floydhub-1-a)"}],["path",{"fill":"currentColor","d":"M488.5 488.5a265 265 0 0 1-188.5 78 265 265 0 0 1-188.5-78 265 265 0 0 1-78-188.5 265 265 0 0 1 78-188.5 265 265 0 0 1 188.5-78 265 265 0 0 1 188.5 78 265 265 0 0 1 78 188.5 265 265 0 0 1-78 188.5m88-305.3A299 299 0 0 0 512 88 299 299 0 0 0 300 0 298 298 0 0 0 87.9 87.9 299 299 0 0 0 0 300a298 298 0 0 0 87.9 212.1A299 299 0 0 0 300 600a298 298 0 0 0 212.1-87.9A299 299 0 0 0 600 300c0-40.5-8-79.8-23.6-116.8M440.5 95H184.7v393.4a12.5 12.5 0 0 0 25.1 0V336.6h181a12.5 12.5 0 1 0 0-25.1h-181v-23h178.5a12.5 12.5 0 0 0 0-25.1H209.8V120h230.8a12.5 12.5 0 1 0 0-25.1"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevFloydhub;
