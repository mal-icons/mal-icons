import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-http",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHttp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M64-360q-10.4 0-17.2-6.8Q40-373.6 40-384v-192q0-10.4 6.8-17.2Q53.6-600 64-600q10.4 0 17.2 6.8Q88-586.4 88-576v61h115v-61q0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2v192q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-83H88v83q0 10.4-6.8 17.2Q74.4-360 64-360Zm313 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-168h-56q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8h160q10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8h-56v168q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm230 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-168h-56q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8h160q10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8h-56v168q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm150 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-186q0-12.75 8.63-21.37T763-600h108q23 0 36 13t13 36v58q0 23-13 35.5T871-445h-90v61q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm24-133h91v-59h-91v59Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHttp;
