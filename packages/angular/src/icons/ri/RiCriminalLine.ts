import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-criminal-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCriminalLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C16.97 2 21 6.03 21 11C21 13.2 20.21 15.22 18.89 16.79C20.15 17.62 20.93 18.68 21 19.84L21 20L12 22L3 20L3 19.84C3.07 18.68 3.85 17.62 5.11 16.79C3.79 15.22 3 13.2 3 11C3 6.03 7.03 2 12 2ZM12 4C8.13 4 5 7.13 5 11C5 12.57 5.51 14.05 6.45 15.26L6.64 15.5L8.08 17.22L6.12 18.52L5.98 18.61L12 19.95L18.02 18.61L17.97 18.58L17.79 18.45L15.92 17.22L17.36 15.5C18.42 14.25 19 12.67 19 11C19 7.13 15.87 4 12 4ZM12 13C13.38 13 14.5 13.67 14.5 14.5C14.5 15.33 13.38 16 12 16C10.62 16 9.5 15.33 9.5 14.5C9.5 13.67 10.62 13 12 13ZM9 8C10.1 8 11 8.67 11 9.5C11 10.33 10.1 11 9 11C7.9 11 7 10.33 7 9.5C7 8.67 7.9 8 9 8ZM15 8C16.1 8 17 8.67 17 9.5C17 10.33 16.1 11 15 11C13.9 11 13 10.33 13 9.5C13 8.67 13.9 8 15 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCriminalLine;
