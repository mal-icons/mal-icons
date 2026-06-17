import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-chest",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiChest {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M58.55 89L42.27 211.8H79V89H58.55zM97 89v122.8h38V89H97zm56 0v122.8h56.67v-17.6h92.67v17.6H359V89H153zm224 0v122.8h38V89h-38zm56 0v122.8h36.73L453.45 89H433zM227.67 212.2v105.2h56.67V212.2h-56.67zM256 223.79a18.67 16.1 0 0 1 18.67 16.1 18.67 16.1 0 0 1-9.67 14.09v37.21h-18V254a18.67 16.1 0 0 1-9.67-14.11 18.67 16.1 0 0 1 18.67-16.1zM41 229.8v127.92l19.33 18.23V229.8H41zm37.33 0v158h355.33v-158H302.33v105.6h-92.67V229.8H78.33zm373.33 0v146.15L471 357.72V229.8h-19.33zM41 382.46V423h43L41 382.46zm430 0L428 423H471v-40.54zM92 405.8l18.24 17.2h291.52L420 405.8H92z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiChest;
