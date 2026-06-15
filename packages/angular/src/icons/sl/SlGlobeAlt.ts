import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-globe-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlGlobeAlt {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M929.5 414.42c0-168.78-88.98-321.87-237.97-409.57-15.25-9.01-34.88-3.87-43.81 11.38-8.94 15.22-3.87 34.85 11.38 43.81 129.25 76.03 206.4 208.53 206.4 354.37 0 242.37-175.94 418.29-418.32 418.29-54.19 0-106.78-10.16-156.32-30.16-16.37-6.66-35.06 1.28-41.66 17.66-6.62 16.4 1.28 35.06 17.66 41.67 57.22 23.12 117.87 34.85 180.32 34.850.19 0 0.39-0.010.58-0.01v63.01h-92.93c-18.46 0-33.44 14.3-33.44 31.95s14.98 31.94 33.44 31.94H607.68c18.46 0 33.44-14.3 33.44-31.94 0-17.66-14.98-31.95-33.44-31.95h-96.38v-66.8c245.81-28.56 418.21-220.91 418.21-478.48zm-130.13 2.88c0-194.66-157.74-353.41-352.4-353.41-194.69 0-352.46 158.75-352.46 353.41s157.78 351.44 352.47 351.44c194.66 0 352.4-156.78 352.4-351.44zm-640.88 0c0-159.02 129.41-289.41 288.46-289.41 159.02 0 288.4 130.37 288.4 289.41s-129.38 287.44-288.4 287.44c-159.06 0-288.46-128.4-288.46-287.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlGlobeAlt;
