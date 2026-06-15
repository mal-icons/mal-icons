import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-bookmark",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgBookmark {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M19 20H17.17L12.71 15.54C12.32 15.14 11.68 15.14 11.29 15.54L6.83 20L5 20V7C5 5.34 6.34 4 8 4H16C17.66 4 19 5.34 19 7V20ZM17 7C17 6.45 16.55 6 16 6H8C7.45 6 7 6.45 7 7V17L9.88 14.12C11.05 12.95 12.95 12.95 14.12 14.12L17 17V7Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgBookmark;
