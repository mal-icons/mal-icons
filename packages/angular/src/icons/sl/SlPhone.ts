import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-phone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlPhone {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M262.2 37c37.4 51.6 82 118.2 133.6 199.6 13 22 11 48.4-5.8 79.4-6.4 13-22.6 42.6-48.4 89.2 28.4 40 71.6 89.2 129.8 147.2s106.6 101.4 145.2 129.8c46.4-27.2 76.2-43.8 89.2-50.4 16.8-9 33-13.6 48.4-13.6 11.6 0 22 2.6 31 7.8 59.4 36.2 126.6 80.8 201.4 133.6 14.2 10.4 22.2 24.6 24.2 42.6 2 18.2-3.6 37.4-16.4 58.2-6.4 9-16.8 22.2-31 39.8-14.2 17.4-35.6 39.4-64 65.8s-51.6 39.8-69.8 39.8h-2c-136.6-5.4-305-107.8-504.4-307.2-199.6-199.6-302-367.8-307.2-504.6 0-18 13.2-41.6 39.8-70.8 26.4-29 48.2-50 64.8-63 16.8-12.8 31-23.2 42.6-31 14.2-10.4 30.4-15.4 48.4-15.4 22.2 0 38.8 7.8 50.6 23.2zm-64 40.6c-27.2 19.4-52.6 41.2-76.6 65-23.8 24-37.8 41.6-41.6 53.2 5.2 120.2 101 273.2 287.6 459.2 186.6 186 340 282.2 460 288.6 10.4-3.8 27.4-18 51.4-42.6s45.6-50.4 64.8-77.4c3.8-5.2 5.2-9.6 3.8-13.6-77.4-54.2-142-97.4-193.8-129.8-5.2 0-11.6 2-19.4 5.8-11.6 6.4-40.6 22.6-87.2 48.4l-33 19.4-33-21.4c-42.6-29.6-94.2-75.6-155-137.6-60.6-60.6-105.8-112.4-135.6-155l-23.2-31 19.4-34.8c25.8-46.4 42-75.6 48.4-87.2 3.8-7.8 5.8-14.2 5.8-19.4-46-73.4-88.6-138-127.4-193.6h-2c-5 0-9.6 1.4-13.4 3.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlPhone;
