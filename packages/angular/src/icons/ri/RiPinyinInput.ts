import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-pinyin-input",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPinyinInput {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.93 3.04L19.67 4.04L18.53 6H21V8H19V12H21V14H19V21H17V14L13.92 14C13.59 16.86 12.35 19.39 10.55 21.19L8.98 19.92C10.5 18.48 11.58 16.4 11.9 14L10 14V12L12 12V8H10V6H12.47L11.33 4.04L13.07 3.04L14.78 6H16.22L17.93 3.04ZM5 13.8L3 14.34V12.27L5 11.73V8H3V6H5V3H7V6H9V8H7V11.2L9 10.66V12.73L7 13.27V18.5C7 19.88 5.88 21 4.5 21H3V19H4.5C4.75 19 4.95 18.82 4.99 18.59L5 18.5V13.8ZM17 8H14V12H17V8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPinyinInput;
