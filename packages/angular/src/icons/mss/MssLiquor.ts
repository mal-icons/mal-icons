import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-liquor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLiquor {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-80v-60h78v-141q-35-10-56.5-38.5T120-386v-334h216v334q0 35-21.5 65T258-281v141h78v60H120Zm60-419h96v-161h-96v161Zm48 161q19 0 33.5-14.5T276-386v-53h-96v53q0 19 14.5 33.5T228-338ZM460-80v-502l126-57v-241h164v239l130 58v503H460Zm186-696h44v-44h-44v44ZM520-465h300v-83l-130-59v-109h-44v109l-126 58.94V-465Zm0 325h300v-103H520v103Zm0-163h300v-102H520v102Zm-292-35Zm292 35v-102 102Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLiquor;
