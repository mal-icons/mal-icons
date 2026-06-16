import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-http",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHttp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-360v-240h48v85h115v-85h48v240h-48v-107H88v107H40Zm313 0v-192h-80v-48h208v48h-80v192h-48Zm230 0v-192h-80v-48h208v48h-80v192h-48Zm150 0v-240h138q23 0 36 13t13 36v58q0 23-13 35.5T871-445h-90v85h-48Zm48-133h91v-59h-91v59Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHttp;
