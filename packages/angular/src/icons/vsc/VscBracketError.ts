import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-bracket-error",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscBracketError {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 10C10.34 10 9 11.34 9 13C9 14.66 10.34 16 12 16C13.66 16 15 14.66 15 13C15 11.34 13.66 10 12 10ZM13.48 13.77C13.67 13.97 13.67 14.28 13.48 14.48C13.38 14.58 13.25 14.62 13.13 14.62C13 14.62 12.87 14.58 12.77 14.48L12 13.71L11.23 14.48C11.13 14.58 11 14.62 10.88 14.62C10.75 14.62 10.62 14.58 10.52 14.48C10.33 14.28 10.33 13.97 10.52 13.77L11.29 13L10.52 12.23C10.33 12.03 10.33 11.72 10.52 11.52C10.72 11.33 11.03 11.33 11.23 11.52L12 12.29L12.77 11.52C12.97 11.33 13.28 11.33 13.48 11.52C13.67 11.72 13.67 12.03 13.48 12.23L12.71 13L13.48 13.77H13.48ZM10.5 2.5C10.5 2.22 10.72 2 11 2C12.11 2 13 2.9 13 4V6.01C13 6.54 13.01 6.8 13.09 7C13.15 7.16 13.28 7.33 13.72 7.55C13.89 7.64 14 7.81 14 8C14 8.19 13.89 8.36 13.72 8.45C13.28 8.67 13.15 8.84 13.09 9C13.07 9.04 13.06 9.09 13.05 9.14C12.73 9.05 12.4 9.01 12.06 9C12.08 8.87 12.11 8.75 12.16 8.63C12.26 8.38 12.4 8.18 12.6 8C12.4 7.82 12.26 7.62 12.16 7.37C12 6.97 12 6.51 12 6.06V4C12 3.45 11.55 3 11 3C10.72 3 10.5 2.78 10.5 2.5ZM3.4 8C3.6 8.18 3.74 8.38 3.84 8.63C4 9.03 4 9.49 4 9.94V12C4 12.55 4.45 13 5 13C5.28 13 5.5 13.23 5.5 13.5C5.5 13.78 5.28 14 5 14C3.9 14 3 13.11 3 12V10C3 9.47 2.99 9.2 2.91 9C2.85 8.84 2.72 8.67 2.28 8.45C2.11 8.36 2 8.19 2 8C2 7.81 2.11 7.64 2.28 7.55C2.72 7.33 2.85 7.16 2.91 7C2.99 6.8 3 6.54 3 6.01V4C3 2.9 3.9 2 5 2C5.28 2 5.5 2.23 5.5 2.5C5.5 2.78 5.28 3 5 3C4.45 3 4 3.45 4 4V6.06C4 6.51 4 6.97 3.84 7.38C3.74 7.62 3.6 7.82 3.4 8L3.4 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscBracketError;
