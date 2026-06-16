import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-unfold-more",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrUnfoldMore {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M322-634q-9-9-9-22t9-22l137-137q5-5 10-7t11-2q5 0 10.5 2t10.5 7l137 137q9 9 9 22t-9 22q-9 9-22 9t-22-9L480-748 366-634q-9 9-22 9t-22-9Zm158 502q-5 0-10.5-2t-10.5-7L322-278q-9-9-9-22t9-22q9-9 22-9t22 9l114 114 114-114q9-9 22-9t22 9q9 9 9 22t-9 22L501-141q-5 5-10 7t-11 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrUnfoldMore;
