import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-unlock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscUnlock {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 9C8.55 9 9 9.45 9 10C9 10.55 8.55 11 8 11C7.45 11 7 10.55 7 10C7 9.45 7.45 9 8 9Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13 1C14.65 1 16 2.35 16 4V4.5C16 4.78 15.78 5 15.5 5C15.22 5 15 4.78 15 4.5V4C15 2.9 14.1 2 13 2C11.9 2 11 2.9 11 4V6H12C13.1 6 14 6.9 14 8V13C14 14.1 13.1 15 12 15H4C2.9 15 2 14.1 2 13V8C2 6.9 2.9 6 4 6H10V4C10 2.35 11.35 1 13 1ZM4 7C3.45 7 3 7.45 3 8V13C3 13.55 3.45 14 4 14H12C12.55 14 13 13.55 13 13V8C13 7.45 12.55 7 12 7H4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscUnlock;
