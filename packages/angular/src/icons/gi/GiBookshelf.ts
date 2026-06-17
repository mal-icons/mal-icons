import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bookshelf",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBookshelf {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M169 57v430h78V57h-78zM25 105v190h46V105H25zm158 23h18v320h-18V128zm128.73 7.69l-45.28 8.12 61.83 344.5 45.28-8.12-61.82-344.5zM89 153v270h62V153H89zm281.5 28.68l-27.59 11.77 5.49 12.88 27.59-11.77-5.49-12.88zm12.56 29.43l-27.6 11.77 5.49 12.88 27.59-11.77-5.49-12.88zm12.56 29.43l-27.59 11.77 99.67 233.63 27.59-11.77-99.67-233.62zM25 313v30h46v-30H25zm190 7h18v128h-18V320zM25 361v126h46V361H25zm64 80v46h62v-46H89z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBookshelf;
