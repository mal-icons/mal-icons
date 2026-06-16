import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-night-shelter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrNightShelter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.8 3.9-6 4.5c-0.50.38-0.80.97-0.8 1.6v9c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-9c0-0.63-0.3-1.22-0.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0zm-1.05 8.6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM16.5 18c-0.28 0-0.5-0.22-0.5-0.5v-1H8v1c0 0.28-0.220.5-0.50.5s-0.5-0.22-0.5-0.5v-6c0-0.280.22-0.50.5-0.5s0.50.220.50.5v4h3.5v-3c0-0.280.22-0.50.5-0.5h3c1.1 0 2 0.9 2 2v3.5c0 0.28-0.220.5-0.50.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrNightShelter;
