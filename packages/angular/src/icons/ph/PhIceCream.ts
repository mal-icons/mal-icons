import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-ice-cream",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhIceCream {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M208,89.37V88A80,80,0,0,0,48,88v1.37A24,24,0,0,0,56,136h3.36l61.69,108a8,8,0,0,0,13.9,0l61.69-108H200a24,24,0,0,0,8-46.63ZM128,223.88,77.79,136H97.07l40.57,71ZM134.79,136l21.71,38-9.64,16.88L115.5,136Zm30.92,21.88L153.21,136h25ZM200,120H56a8,8,0,0,1,0-16,8,8,0,0,0,8-8V88a64,64,0,0,1,128,0v8a8,8,0,0,0,8,8,8,8,0,0,1,0,16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhIceCream;
