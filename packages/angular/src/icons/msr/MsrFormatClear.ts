import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-format-clear",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFormatClear {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m507-524-77-76 24-56h-79L271-760h479q21 0 35.5 14.5T800-710q0 21-14.5 35.5T750-660H565l-58 136ZM785-77 457-406l-75 176q-6 14-18.5 22t-27.5 8q-27 0-42-22.5t-4-47.5l90-212L77-785q-9-9-9-21t9-21q9-9 21-9t21 9l708 708q9 9 9 21t-9 21q-9 9-21 9t-21-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFormatClear;
