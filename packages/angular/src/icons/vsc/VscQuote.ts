import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-quote",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscQuote {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 3C6.55 3 7 3.45 7 4V5C7 7.59 6.47 9.73 4.35 11.85C4.16 12.05 3.84 12.05 3.65 11.85C3.45 11.66 3.45 11.34 3.65 11.15C5.03 9.76 5.65 8.39 5.88 6.79C5.62 6.93 5.32 7 5 7H4C3.45 7 3 6.55 3 6V4C3 3.45 3.45 3 4 3H6L6 3Z"}],["path",{"d":"M12 3C12.55 3 13 3.45 13 4V5C13 7.59 12.47 9.73 10.35 11.85C10.16 12.05 9.84 12.05 9.65 11.85C9.45 11.66 9.45 11.34 9.65 11.15C11.03 9.76 11.65 8.39 11.88 6.79C11.62 6.93 11.32 7 11 7H10C9.45 7 9 6.55 9 6V4C9 3.45 9.45 3 10 3H12L12 3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscQuote;
