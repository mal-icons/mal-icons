import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-film",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiFilm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 8v7h8v-7h-8zm7 6h-6v-5h6v5zM17 2h-3v2h-4v-2h-3c-1.65 0-3 1.35-3 3v13c0 1.65 1.35 3 3 3h3v-2h4v2h3c1.65 0 3-1.35 3-3v-13c0-1.65-1.35-3-3-3zm1 4c-0.55 0-1 0.45-1 1s0.45 1 1 1v1c-0.55 0-1 0.45-1 1s0.45 1 1 1v1c-0.55 0-1 0.45-1 1s0.45 1 1 1v1c-0.55 0-1 0.45-1 1s0.45 1 1 1v1c0 0.55-0.45 1-1 1h-1v-2h-8v2h-1c-0.55 0-1-0.45-1-1v-1c0.55 0 1-0.45 1-1s-0.45-1-1-1v-1c0.55 0 1-0.45 1-1s-0.45-1-1-1v-1c0.55 0 1-0.45 1-1s-0.45-1-1-1v-1c0.55 0 1-0.45 1-1s-0.45-1-1-1v-1c0-0.550.45-1 1-1h1v2h8v-2h1c0.55 0 1 0.45 1 1v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiFilm;
