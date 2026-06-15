import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-musical-note",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiMusicalNote {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m9 9 10.5-3m0 6.55v3.75a2.25 2.25 0 0 1-1.63 2.16l-1.320.38a1.8 1.8 0 1 1-0.99-3.47l2.31-0.66a2.25 2.25 0 0 0 1.63-2.16Zm0 0V2.25L9 5.25v10.3m0 0v3.75a2.25 2.25 0 0 1-1.63 2.16l-1.320.38a1.8 1.8 0 0 1-0.99-3.47l2.31-0.66A2.25 2.25 0 0 0 9 15.55Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiMusicalNote;
