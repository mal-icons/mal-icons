import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-film-reel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcFilmReel {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#3F51B5","d":"M43,39V24h-4v15c0,5,4,9,9,9v-4C45.2,44,43,41.8,43,39z"}],["circle",{"fill":"#90A4AE","cx":"24","cy":"24","r":"19"}],["circle",{"fill":"#37474F","cx":"24","cy":"24","r":"2"}],["circle",{"fill":"#253278","cx":"24","cy":"14","r":"5"}],["circle",{"fill":"#253278","cx":"24","cy":"34","r":"5"}],["circle",{"fill":"#253278","cx":"34","cy":"24","r":"5"}],["circle",{"fill":"#253278","cx":"14","cy":"24","r":"5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcFilmReel;
