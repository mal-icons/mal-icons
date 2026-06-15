import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-error-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscErrorSmall {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.35 6.65C7.16 6.45 6.84 6.45 6.65 6.65C6.45 6.84 6.45 7.16 6.65 7.35L7.29 8L6.65 8.65C6.45 8.84 6.45 9.16 6.65 9.35C6.84 9.55 7.16 9.55 7.35 9.35L8 8.71L8.65 9.35C8.84 9.55 9.16 9.55 9.35 9.35C9.55 9.16 9.55 8.84 9.35 8.65L8.71 8L9.35 7.35C9.55 7.16 9.55 6.84 9.35 6.65C9.16 6.45 8.84 6.45 8.65 6.65L8 7.29L7.35 6.65Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8 12C10.21 12 12 10.21 12 8C12 5.79 10.21 4 8 4C5.79 4 4 5.79 4 8C4 10.21 5.79 12 8 12ZM8 5C9.66 5 11 6.34 11 8C11 9.66 9.66 11 8 11C6.34 11 5 9.66 5 8C5 6.34 6.34 5 8 5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscErrorSmall;
