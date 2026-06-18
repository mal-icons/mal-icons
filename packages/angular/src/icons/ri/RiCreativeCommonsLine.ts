import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-creative-commons-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCreativeCommonsLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 8C10.1 8 11.1 8.45 11.83 9.17L10.42 10.59C10.05 10.22 9.55 10 9 10 7.9 10 7 10.9 7 12 7 13.11 7.9 14 9 14 9.55 14 10.05 13.78 10.41 13.41L11.83 14.83C11.1 15.55 10.1 16 9 16 6.79 16 5 14.21 5 12 5 9.79 6.79 8 9 8ZM18.83 9.17C18.1 8.45 17.1 8 16 8 13.79 8 12 9.79 12 12 12 14.21 13.79 16 16 16 17.1 16 18.1 15.55 18.83 14.83L17.41 13.41C17.05 13.78 16.55 14 16 14 14.9 14 14 13.11 14 12 14 10.9 14.9 10 16 10 16.55 10 17.05 10.22 17.42 10.59L18.83 9.17ZM2 12C2 6.48 6.48 2 12 2 17.52 2 22 6.48 22 12 22 17.52 17.52 22 12 22 6.48 22 2 17.52 2 12ZM12 4C7.58 4 4 7.58 4 12 4 16.42 7.58 20 12 20 16.42 20 20 16.42 20 12 20 7.58 16.42 4 12 4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCreativeCommonsLine;
