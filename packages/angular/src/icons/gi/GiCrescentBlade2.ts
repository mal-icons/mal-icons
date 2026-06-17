import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-crescent-blade",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCrescentBlade2 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M334.53 331.82a280.07 280.07 0 0 0 76.58-253.71q7.17 6.1 13.96 12.88c91.51 91.51 91.51 239.87 0 331.38a234.32 234.32 0 0 1-331.38 0q-6.76-6.76-12.88-13.96a281.78 281.78 0 0 0 55.5 5.52 279.43 279.43 0 0 0 198.22-82.11zM18.3 90.16s205.93 155 252.89 225.5c9.49 14.26 2.47 34.73-9.38 48.3A263.52 263.52 0 0 0 366.65 259.11c-13.57 11.8-34 18.81-48.24 9.31C249.43 222.49 97.77 21 97.77 21H18.3v69.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCrescentBlade2;
