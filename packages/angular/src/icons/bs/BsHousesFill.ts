import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-houses-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHousesFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.21 1a1 1 0 0 0-1.41 0L0.15 6.65a0.50.5 0 0 0 0.710.71L1 7.21V12.5A1.5 1.5 0 0 0 2.5 14h0.55a2.5 2.5 0 0 1-0.05-0.5V9.41a1.5 1.5 0 0 1-0.56-2.47l5.35-5.35z"}],["path",{"d":"M8.79 2a1 1 0 0 1 1.41 0L12 3.79V2.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v3.29l1.85 1.85a0.50.5 0 0 1-0.710.71L15 8.21V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.21l-0.150.15a0.50.5 0 1 1-0.71-0.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHousesFill;
