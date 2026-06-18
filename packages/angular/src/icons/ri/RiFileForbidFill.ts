import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-file-forbid-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFileForbidFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 11.67C20.09 11.24 19.07 11 18 11C14.13 11 11 14.13 11 18C11 19.49 11.46 20.87 12.25 22H3.99C3.44 22 3 21.54 3 21.01V2.99C3 2.44 3.44 2 3.99 2H16L21 7V11.67ZM18 23C15.24 23 13 20.76 13 18C13 15.24 15.24 13 18 13C20.76 13 23 15.24 23 18C23 20.76 20.76 23 18 23ZM16.71 20.71C17.1 20.9 17.54 21 18 21C19.66 21 21 19.66 21 18C21 17.54 20.9 17.1 20.71 16.71L16.71 20.71ZM15.29 19.29L19.29 15.29C18.9 15.11 18.46 15 18 15C16.34 15 15 16.34 15 18C15 18.46 15.11 18.9 15.29 19.29Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFileForbidFill;
