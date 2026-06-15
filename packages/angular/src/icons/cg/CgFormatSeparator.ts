import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-format-separator",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgFormatSeparator {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"opacity":"0.5"}],["path",{"d":"M16 5C16.55 5 17 4.55 17 4C17 3.45 16.55 3 16 3H8C7.45 3 7 3.45 7 4C7 4.55 7.45 5 8 5L16 5Z","fill":"currentColor"}],["path",{"d":"M16 7C16.55 7 17 7.45 17 8C17 8.55 16.55 9 16 9H8C7.45 9 7 8.55 7 8C7 7.45 7.45 7 8 7H16Z","fill":"currentColor"}],["path",{"d":"M17 12C17 12.55 16.55 13 16 13L8 13C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11L16 11C16.55 11 17 11.45 17 12Z","fill":"currentColor"}],["path",{"d":"M16 21C16.55 21 17 20.55 17 20C17 19.45 16.55 19 16 19L8 19C7.45 19 7 19.45 7 20C7 20.55 7.45 21 8 21H16Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M21 16C21 16.55 20.55 17 20 17L4 17C3.45 17 3 16.55 3 16C3 15.45 3.45 15 4 15L20 15C20.55 15 21 15.45 21 16Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgFormatSeparator;
