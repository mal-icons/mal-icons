import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-save-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscSaveAll {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15 6.12V11C15 12.06 14.58 13.08 13.83 13.83C13.08 14.58 12.06 15 11 15H5C4.91 15 4.82 14.99 4.74 14.98C4.66 14.97 4.58 14.96 4.5 14.93C4.32 14.89 4.15 14.82 4 14.73C3.92 14.68 3.85 14.64 3.78 14.58C3.64 14.48 3.52 14.36 3.42 14.22C3.36 14.15 3.32 14.08 3.27 14H11C11.35 14 11.69 13.94 12 13.82C12.42 13.68 12.8 13.44 13.12 13.12C13.68 12.56 14 11.8 14 11V4.3L14.41 4.71C14.79 5.08 15 5.6 15 6.12ZM11 13H3C1.9 13 1 12.1 1 11V3C1 1.9 1.9 1 3 1H9.88C10.41 1 10.92 1.21 11.29 1.59L12.41 2.71C12.79 3.08 13 3.6 13 4.12V11C13 12.1 12.1 13 11 13ZM6 3H8V2H6V3ZM9 8H5V12H9V8ZM10 8V12H11C11.55 12 12 11.55 12 11V4.12C12 3.86 11.89 3.6 11.71 3.41L10.59 2.29C10.4 2.11 10.14 2 9.88 2H9V3C9 3.55 8.55 4 8 4H6C5.45 4 5 3.55 5 3V2H3C2.45 2 2 2.45 2 3V11C2 11.55 2.45 12 3 12H4V8C4 7.45 4.45 7 5 7H9C9.55 7 10 7.45 10 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscSaveAll;
