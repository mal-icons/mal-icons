import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-videogame-asset",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtVideogameAsset {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 16h18V8H3v8zm15.5-7c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.50.67-1.5 1.5-1.5zm-4 3c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.50.67-1.5 1.5-1.5zM4 11h2V9h2v2h2v2H8v2H6v-2H4v-2z","opacity":".3"}],["path",{"d":"M21 6H3c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"}],["circle",{"cx":"14.5","cy":"13.5","r":"1.5"}],["circle",{"cx":"18.5","cy":"10.5","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtVideogameAsset;
