import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-symbol-keyword",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscSymbolKeyword {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.5 14C9.78 14 10 14.22 10 14.5C10 14.78 9.78 15 9.5 15H2.5C2.22 15 2 14.78 2 14.5C2 14.22 2.22 14 2.5 14H9.5Z"}],["path",{"d":"M6.5 11C6.78 11 7 11.22 7 11.5C7 11.78 6.78 12 6.5 12H2.5C2.22 12 2 11.78 2 11.5C2 11.22 2.22 11 2.5 11H6.5Z"}],["path",{"d":"M13.5 11C13.78 11 14 11.22 14 11.5C14 11.78 13.78 12 13.5 12H8.5C8.22 12 8 11.78 8 11.5C8 11.22 8.22 11 8.5 11H13.5Z"}],["path",{"d":"M8.5 8C8.78 8 9 8.22 9 8.5C9 8.78 8.78 9 8.5 9H2.5C2.22 9 2 8.78 2 8.5C2 8.22 2.22 8 2.5 8H8.5Z"}],["path",{"d":"M13.5 8C13.78 8 14 8.22 14 8.5C14 8.78 13.78 9 13.5 9H10.5C10.22 9 10 8.78 10 8.5C10 8.22 10.22 8 10.5 8H13.5Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M9 2C9.55 2 10 2.45 10 3V5C10 5.55 9.55 6 9 6H3C2.45 6 2 5.55 2 5V3C2 2.45 2.45 2 3 2H9ZM3 5H9V3H3V5Z"}],["path",{"d":"M13.5 4C13.78 4 14 4.22 14 4.5C14 4.78 13.78 5 13.5 5H11.5C11.22 5 11 4.78 11 4.5C11 4.22 11.22 4 11.5 4H13.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscSymbolKeyword;
