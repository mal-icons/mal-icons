import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-no-food",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNoFood {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M833-41 26-848l43-43L876-84l-43 43Zm29-143-54-54 43-442H453l-7-60h205v-180h60v180h209l-58 556ZM636-409ZM40-176v-60h608v60H40Zm0 136v-60h608v60H40Zm390-490v60q-20-4-41.5-5.5T344-477q-101 0-157 31t-75 82h484l60 60H40q0-97 72-165t232-68q23 0 44.5 2t41.5 5Zm-86 166Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNoFood;
