import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-videogame-asset-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrVideogameAssetOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.7 17.87c0.76-0.28 1.3-1.02 1.3-1.87V8c0-1.1-0.9-2-2-2H8.83L20.7 17.87zM17.5 9c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.50.67-1.5 1.5-1.5zm2.99 11.49L3.51 3.51A11 0 1 0 2.1 4.92l1.2 1.2C2.54 6.41 2 7.15 2 8v8c0 1.10.9 2 2 2h11.17l3.9 3.9c0.390.39 1.020.39 1.41 0 0.4-0.390.4-1.020.01-1.41zM10 13H9v1c0 0.55-0.45 1-1 1s-1-0.45-1-1v-1H6c-0.55 0-1-0.45-1-1s0.45-1 1-1h1v-1c0-0.050.01-0.110.01-0.16l3.14 3.14A0.680.68 0 0 1 10 13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrVideogameAssetOff;
